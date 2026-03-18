import { brandConfig } from '../../config/brandConfig';
import configThemes from '../../config/theme';
 // Adjust path as needed

const config = brandConfig.meta.Home.stats;
const theme = configThemes.home;

const Stats = () => {
  return (
    <section 
      className="w-full py-8" 
      style={{ backgroundColor: theme.brandMainColor }}
    >
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
        
        {/* Stat 1 */}
        <div className="p-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-2">
            {config.stash1.number}
          </h3>
          <p className="uppercase tracking-wider text-sm opacity-90">
            {config.stash1.label}
          </p>
        </div>

        {/* Stat 2 */}
        <div className="p-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-2">
            {config.stash2.number}
          </h3>
          <p className="uppercase tracking-wider text-sm opacity-90">
            {config.stash2.label}
          </p>
        </div>

        {/* Stat 3 */}
        <div className="p-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-2">
            {config.stash3.number}
          </h3>
          <p className="uppercase tracking-wider text-sm opacity-90">
            {config.stash3.label}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Stats;