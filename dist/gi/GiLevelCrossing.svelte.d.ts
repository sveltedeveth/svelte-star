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
export type GiLevelCrossingProps = typeof __propDef.props;
export type GiLevelCrossingEvents = typeof __propDef.events;
export type GiLevelCrossingSlots = typeof __propDef.slots;
export default class GiLevelCrossing extends SvelteComponentTyped<GiLevelCrossingProps, GiLevelCrossingEvents, GiLevelCrossingSlots> {
}
export {};
