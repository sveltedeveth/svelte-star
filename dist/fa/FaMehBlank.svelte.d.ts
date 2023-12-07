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
export type FaMehBlankProps = typeof __propDef.props;
export type FaMehBlankEvents = typeof __propDef.events;
export type FaMehBlankSlots = typeof __propDef.slots;
export default class FaMehBlank extends SvelteComponentTyped<FaMehBlankProps, FaMehBlankEvents, FaMehBlankSlots> {
}
export {};
