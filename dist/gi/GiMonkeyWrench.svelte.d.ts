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
export type GiMonkeyWrenchProps = typeof __propDef.props;
export type GiMonkeyWrenchEvents = typeof __propDef.events;
export type GiMonkeyWrenchSlots = typeof __propDef.slots;
export default class GiMonkeyWrench extends SvelteComponentTyped<GiMonkeyWrenchProps, GiMonkeyWrenchEvents, GiMonkeyWrenchSlots> {
}
export {};
