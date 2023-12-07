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
export type IoMdInformationProps = typeof __propDef.props;
export type IoMdInformationEvents = typeof __propDef.events;
export type IoMdInformationSlots = typeof __propDef.slots;
export default class IoMdInformation extends SvelteComponentTyped<IoMdInformationProps, IoMdInformationEvents, IoMdInformationSlots> {
}
export {};
