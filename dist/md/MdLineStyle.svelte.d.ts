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
export type MdLineStyleProps = typeof __propDef.props;
export type MdLineStyleEvents = typeof __propDef.events;
export type MdLineStyleSlots = typeof __propDef.slots;
export default class MdLineStyle extends SvelteComponentTyped<MdLineStyleProps, MdLineStyleEvents, MdLineStyleSlots> {
}
export {};
