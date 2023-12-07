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
export type FaMagnetProps = typeof __propDef.props;
export type FaMagnetEvents = typeof __propDef.events;
export type FaMagnetSlots = typeof __propDef.slots;
export default class FaMagnet extends SvelteComponentTyped<FaMagnetProps, FaMagnetEvents, FaMagnetSlots> {
}
export {};
