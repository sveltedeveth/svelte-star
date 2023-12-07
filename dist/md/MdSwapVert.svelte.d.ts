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
export type MdSwapVertProps = typeof __propDef.props;
export type MdSwapVertEvents = typeof __propDef.events;
export type MdSwapVertSlots = typeof __propDef.slots;
export default class MdSwapVert extends SvelteComponentTyped<MdSwapVertProps, MdSwapVertEvents, MdSwapVertSlots> {
}
export {};
