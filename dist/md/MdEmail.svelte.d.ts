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
export type MdEmailProps = typeof __propDef.props;
export type MdEmailEvents = typeof __propDef.events;
export type MdEmailSlots = typeof __propDef.slots;
export default class MdEmail extends SvelteComponentTyped<MdEmailProps, MdEmailEvents, MdEmailSlots> {
}
export {};
