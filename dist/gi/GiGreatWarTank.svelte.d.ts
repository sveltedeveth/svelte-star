import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiGreatWarTankProps = typeof __propDef.props;
export type GiGreatWarTankEvents = typeof __propDef.events;
export type GiGreatWarTankSlots = typeof __propDef.slots;
export default class GiGreatWarTank extends SvelteComponentTyped<GiGreatWarTankProps, GiGreatWarTankEvents, GiGreatWarTankSlots> {
}
export {};
