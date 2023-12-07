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
export type IoIosSnowProps = typeof __propDef.props;
export type IoIosSnowEvents = typeof __propDef.events;
export type IoIosSnowSlots = typeof __propDef.slots;
export default class IoIosSnow extends SvelteComponentTyped<IoIosSnowProps, IoIosSnowEvents, IoIosSnowSlots> {
}
export {};
