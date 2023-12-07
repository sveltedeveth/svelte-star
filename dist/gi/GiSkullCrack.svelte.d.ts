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
export type GiSkullCrackProps = typeof __propDef.props;
export type GiSkullCrackEvents = typeof __propDef.events;
export type GiSkullCrackSlots = typeof __propDef.slots;
export default class GiSkullCrack extends SvelteComponentTyped<GiSkullCrackProps, GiSkullCrackEvents, GiSkullCrackSlots> {
}
export {};
