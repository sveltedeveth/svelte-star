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
export type GiClownProps = typeof __propDef.props;
export type GiClownEvents = typeof __propDef.events;
export type GiClownSlots = typeof __propDef.slots;
export default class GiClown extends SvelteComponentTyped<GiClownProps, GiClownEvents, GiClownSlots> {
}
export {};
