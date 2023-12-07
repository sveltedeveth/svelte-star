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
export type IoIosSubwayProps = typeof __propDef.props;
export type IoIosSubwayEvents = typeof __propDef.events;
export type IoIosSubwaySlots = typeof __propDef.slots;
export default class IoIosSubway extends SvelteComponentTyped<IoIosSubwayProps, IoIosSubwayEvents, IoIosSubwaySlots> {
}
export {};
