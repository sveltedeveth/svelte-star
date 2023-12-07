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
export type TiTickProps = typeof __propDef.props;
export type TiTickEvents = typeof __propDef.events;
export type TiTickSlots = typeof __propDef.slots;
export default class TiTick extends SvelteComponentTyped<TiTickProps, TiTickEvents, TiTickSlots> {
}
export {};
