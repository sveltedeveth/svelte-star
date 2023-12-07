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
export type IoIosThunderstormProps = typeof __propDef.props;
export type IoIosThunderstormEvents = typeof __propDef.events;
export type IoIosThunderstormSlots = typeof __propDef.slots;
export default class IoIosThunderstorm extends SvelteComponentTyped<IoIosThunderstormProps, IoIosThunderstormEvents, IoIosThunderstormSlots> {
}
export {};
