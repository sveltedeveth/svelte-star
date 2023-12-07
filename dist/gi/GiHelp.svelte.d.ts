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
export type GiHelpProps = typeof __propDef.props;
export type GiHelpEvents = typeof __propDef.events;
export type GiHelpSlots = typeof __propDef.slots;
export default class GiHelp extends SvelteComponentTyped<GiHelpProps, GiHelpEvents, GiHelpSlots> {
}
export {};
