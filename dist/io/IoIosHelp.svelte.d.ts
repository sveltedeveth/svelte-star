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
export type IoIosHelpProps = typeof __propDef.props;
export type IoIosHelpEvents = typeof __propDef.events;
export type IoIosHelpSlots = typeof __propDef.slots;
export default class IoIosHelp extends SvelteComponentTyped<IoIosHelpProps, IoIosHelpEvents, IoIosHelpSlots> {
}
export {};
