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
export type GiReptileTailProps = typeof __propDef.props;
export type GiReptileTailEvents = typeof __propDef.events;
export type GiReptileTailSlots = typeof __propDef.slots;
export default class GiReptileTail extends SvelteComponentTyped<GiReptileTailProps, GiReptileTailEvents, GiReptileTailSlots> {
}
export {};
