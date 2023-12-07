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
export type GiPrivateProps = typeof __propDef.props;
export type GiPrivateEvents = typeof __propDef.events;
export type GiPrivateSlots = typeof __propDef.slots;
export default class GiPrivate extends SvelteComponentTyped<GiPrivateProps, GiPrivateEvents, GiPrivateSlots> {
}
export {};
