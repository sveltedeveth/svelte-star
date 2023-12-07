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
export type MdAspectRatioProps = typeof __propDef.props;
export type MdAspectRatioEvents = typeof __propDef.events;
export type MdAspectRatioSlots = typeof __propDef.slots;
export default class MdAspectRatio extends SvelteComponentTyped<MdAspectRatioProps, MdAspectRatioEvents, MdAspectRatioSlots> {
}
export {};
