import { useState, useCallback } from 'react';

export const useMarketData = () => {
  const [marketData, setMarketData] = useState({
    sp500: { value: 5234.80, change: 2.45 },
    nasdaq: { value: 16892.50, change: 1.82 },
    dowJones: { value: 41584.30, change: -0.58 },
    marketTrend: 3.24,
    portfolioValue: 524320,
    todayProfit: 8945,
    volatilityIndex: 18.42
  });

  const updateMarketData = useCallback(() => {
    setMarketData(prevData => ({
      ...prevData,
      // Simulate small random changes (±0.2%)
      marketTrend: parseFloat(
        (prevData.marketTrend + (Math.random() - 0.5) * 0.4).toFixed(2)
      ),
      // Simulate stock price changes (±0.5%)
      sp500: {
        ...prevData.sp500,
        value: parseFloat(
          (prevData.sp500.value + (Math.random() - 0.5) * 20).toFixed(2)
        )
      },
      nasdaq: {
        ...prevData.nasdaq,
        value: parseFloat(
          (prevData.nasdaq.value + (Math.random() - 0.5) * 50).toFixed(2)
        )
      },
      dowJones: {
        ...prevData.dowJones,
        value: parseFloat(
          (prevData.dowJones.value + (Math.random() - 0.5) * 40).toFixed(2)
        )
      }
    }));
  }, []);

  return { marketData, updateMarketData };
};
