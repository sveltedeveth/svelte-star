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
export type GiDiplodocusProps = typeof __propDef.props;
export type GiDiplodocusEvents = typeof __propDef.events;
export type GiDiplodocusSlots = typeof __propDef.slots;
export default class GiDiplodocus extends SvelteComponentTyped<GiDiplodocusProps, GiDiplodocusEvents, GiDiplodocusSlots> {
}
export {};
