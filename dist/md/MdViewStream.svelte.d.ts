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
export type MdViewStreamProps = typeof __propDef.props;
export type MdViewStreamEvents = typeof __propDef.events;
export type MdViewStreamSlots = typeof __propDef.slots;
export default class MdViewStream extends SvelteComponentTyped<MdViewStreamProps, MdViewStreamEvents, MdViewStreamSlots> {
}
export {};
