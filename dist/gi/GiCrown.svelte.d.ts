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
export type GiCrownProps = typeof __propDef.props;
export type GiCrownEvents = typeof __propDef.events;
export type GiCrownSlots = typeof __propDef.slots;
export default class GiCrown extends SvelteComponentTyped<GiCrownProps, GiCrownEvents, GiCrownSlots> {
}
export {};
