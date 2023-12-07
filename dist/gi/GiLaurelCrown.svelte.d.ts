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
export type GiLaurelCrownProps = typeof __propDef.props;
export type GiLaurelCrownEvents = typeof __propDef.events;
export type GiLaurelCrownSlots = typeof __propDef.slots;
export default class GiLaurelCrown extends SvelteComponentTyped<GiLaurelCrownProps, GiLaurelCrownEvents, GiLaurelCrownSlots> {
}
export {};
