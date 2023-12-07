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
export type MdGroupWorkProps = typeof __propDef.props;
export type MdGroupWorkEvents = typeof __propDef.events;
export type MdGroupWorkSlots = typeof __propDef.slots;
export default class MdGroupWork extends SvelteComponentTyped<MdGroupWorkProps, MdGroupWorkEvents, MdGroupWorkSlots> {
}
export {};
