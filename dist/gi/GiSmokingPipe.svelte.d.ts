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
export type GiSmokingPipeProps = typeof __propDef.props;
export type GiSmokingPipeEvents = typeof __propDef.events;
export type GiSmokingPipeSlots = typeof __propDef.slots;
export default class GiSmokingPipe extends SvelteComponentTyped<GiSmokingPipeProps, GiSmokingPipeEvents, GiSmokingPipeSlots> {
}
export {};
