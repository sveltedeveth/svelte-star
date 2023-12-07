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
export type GiFeatherProps = typeof __propDef.props;
export type GiFeatherEvents = typeof __propDef.events;
export type GiFeatherSlots = typeof __propDef.slots;
export default class GiFeather extends SvelteComponentTyped<GiFeatherProps, GiFeatherEvents, GiFeatherSlots> {
}
export {};
