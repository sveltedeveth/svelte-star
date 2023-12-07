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
export type GiBalkenkreuzProps = typeof __propDef.props;
export type GiBalkenkreuzEvents = typeof __propDef.events;
export type GiBalkenkreuzSlots = typeof __propDef.slots;
export default class GiBalkenkreuz extends SvelteComponentTyped<GiBalkenkreuzProps, GiBalkenkreuzEvents, GiBalkenkreuzSlots> {
}
export {};
