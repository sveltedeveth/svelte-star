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
export type IoIosSettingsProps = typeof __propDef.props;
export type IoIosSettingsEvents = typeof __propDef.events;
export type IoIosSettingsSlots = typeof __propDef.slots;
export default class IoIosSettings extends SvelteComponentTyped<IoIosSettingsProps, IoIosSettingsEvents, IoIosSettingsSlots> {
}
export {};
