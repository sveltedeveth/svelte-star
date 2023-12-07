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
export type IoIosWarningProps = typeof __propDef.props;
export type IoIosWarningEvents = typeof __propDef.events;
export type IoIosWarningSlots = typeof __propDef.slots;
export default class IoIosWarning extends SvelteComponentTyped<IoIosWarningProps, IoIosWarningEvents, IoIosWarningSlots> {
}
export {};
