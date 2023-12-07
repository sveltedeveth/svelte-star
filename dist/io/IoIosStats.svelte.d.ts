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
export type IoIosStatsProps = typeof __propDef.props;
export type IoIosStatsEvents = typeof __propDef.events;
export type IoIosStatsSlots = typeof __propDef.slots;
export default class IoIosStats extends SvelteComponentTyped<IoIosStatsProps, IoIosStatsEvents, IoIosStatsSlots> {
}
export {};
