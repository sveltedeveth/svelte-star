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
export type TiLocationProps = typeof __propDef.props;
export type TiLocationEvents = typeof __propDef.events;
export type TiLocationSlots = typeof __propDef.slots;
export default class TiLocation extends SvelteComponentTyped<TiLocationProps, TiLocationEvents, TiLocationSlots> {
}
export {};
