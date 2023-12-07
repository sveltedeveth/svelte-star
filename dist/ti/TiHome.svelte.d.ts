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
export type TiHomeProps = typeof __propDef.props;
export type TiHomeEvents = typeof __propDef.events;
export type TiHomeSlots = typeof __propDef.slots;
export default class TiHome extends SvelteComponentTyped<TiHomeProps, TiHomeEvents, TiHomeSlots> {
}
export {};
