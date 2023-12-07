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
export type MdWhatshotProps = typeof __propDef.props;
export type MdWhatshotEvents = typeof __propDef.events;
export type MdWhatshotSlots = typeof __propDef.slots;
export default class MdWhatshot extends SvelteComponentTyped<MdWhatshotProps, MdWhatshotEvents, MdWhatshotSlots> {
}
export {};
