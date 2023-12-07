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
export type TiStarburstProps = typeof __propDef.props;
export type TiStarburstEvents = typeof __propDef.events;
export type TiStarburstSlots = typeof __propDef.slots;
export default class TiStarburst extends SvelteComponentTyped<TiStarburstProps, TiStarburstEvents, TiStarburstSlots> {
}
export {};
