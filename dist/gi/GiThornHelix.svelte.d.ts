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
export type GiThornHelixProps = typeof __propDef.props;
export type GiThornHelixEvents = typeof __propDef.events;
export type GiThornHelixSlots = typeof __propDef.slots;
export default class GiThornHelix extends SvelteComponentTyped<GiThornHelixProps, GiThornHelixEvents, GiThornHelixSlots> {
}
export {};
