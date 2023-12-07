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
export type MdSimCardProps = typeof __propDef.props;
export type MdSimCardEvents = typeof __propDef.events;
export type MdSimCardSlots = typeof __propDef.slots;
export default class MdSimCard extends SvelteComponentTyped<MdSimCardProps, MdSimCardEvents, MdSimCardSlots> {
}
export {};
