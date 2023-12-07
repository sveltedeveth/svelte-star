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
export type IoMdBaseballProps = typeof __propDef.props;
export type IoMdBaseballEvents = typeof __propDef.events;
export type IoMdBaseballSlots = typeof __propDef.slots;
export default class IoMdBaseball extends SvelteComponentTyped<IoMdBaseballProps, IoMdBaseballEvents, IoMdBaseballSlots> {
}
export {};
