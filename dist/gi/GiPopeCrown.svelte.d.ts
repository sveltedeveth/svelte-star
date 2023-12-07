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
export type GiPopeCrownProps = typeof __propDef.props;
export type GiPopeCrownEvents = typeof __propDef.events;
export type GiPopeCrownSlots = typeof __propDef.slots;
export default class GiPopeCrown extends SvelteComponentTyped<GiPopeCrownProps, GiPopeCrownEvents, GiPopeCrownSlots> {
}
export {};
