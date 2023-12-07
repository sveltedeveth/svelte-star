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
export type IoIosColorFilterProps = typeof __propDef.props;
export type IoIosColorFilterEvents = typeof __propDef.events;
export type IoIosColorFilterSlots = typeof __propDef.slots;
export default class IoIosColorFilter extends SvelteComponentTyped<IoIosColorFilterProps, IoIosColorFilterEvents, IoIosColorFilterSlots> {
}
export {};
