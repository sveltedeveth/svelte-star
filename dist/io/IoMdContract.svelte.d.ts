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
export type IoMdContractProps = typeof __propDef.props;
export type IoMdContractEvents = typeof __propDef.events;
export type IoMdContractSlots = typeof __propDef.slots;
export default class IoMdContract extends SvelteComponentTyped<IoMdContractProps, IoMdContractEvents, IoMdContractSlots> {
}
export {};
