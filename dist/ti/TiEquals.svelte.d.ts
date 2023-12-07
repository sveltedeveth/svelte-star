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
export type TiEqualsProps = typeof __propDef.props;
export type TiEqualsEvents = typeof __propDef.events;
export type TiEqualsSlots = typeof __propDef.slots;
export default class TiEquals extends SvelteComponentTyped<TiEqualsProps, TiEqualsEvents, TiEqualsSlots> {
}
export {};
