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
export type TiAtProps = typeof __propDef.props;
export type TiAtEvents = typeof __propDef.events;
export type TiAtSlots = typeof __propDef.slots;
export default class TiAt extends SvelteComponentTyped<TiAtProps, TiAtEvents, TiAtSlots> {
}
export {};
