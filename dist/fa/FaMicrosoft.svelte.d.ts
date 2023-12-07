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
export type FaMicrosoftProps = typeof __propDef.props;
export type FaMicrosoftEvents = typeof __propDef.events;
export type FaMicrosoftSlots = typeof __propDef.slots;
export default class FaMicrosoft extends SvelteComponentTyped<FaMicrosoftProps, FaMicrosoftEvents, FaMicrosoftSlots> {
}
export {};
