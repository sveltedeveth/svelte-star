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
export type GiFemaleProps = typeof __propDef.props;
export type GiFemaleEvents = typeof __propDef.events;
export type GiFemaleSlots = typeof __propDef.slots;
export default class GiFemale extends SvelteComponentTyped<GiFemaleProps, GiFemaleEvents, GiFemaleSlots> {
}
export {};
