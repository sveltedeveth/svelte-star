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
export type IoIosInformationProps = typeof __propDef.props;
export type IoIosInformationEvents = typeof __propDef.events;
export type IoIosInformationSlots = typeof __propDef.slots;
export default class IoIosInformation extends SvelteComponentTyped<IoIosInformationProps, IoIosInformationEvents, IoIosInformationSlots> {
}
export {};
