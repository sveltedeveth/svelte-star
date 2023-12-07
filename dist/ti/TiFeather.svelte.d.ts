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
export type TiFeatherProps = typeof __propDef.props;
export type TiFeatherEvents = typeof __propDef.events;
export type TiFeatherSlots = typeof __propDef.slots;
export default class TiFeather extends SvelteComponentTyped<TiFeatherProps, TiFeatherEvents, TiFeatherSlots> {
}
export {};
