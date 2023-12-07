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
export type GiSaddleProps = typeof __propDef.props;
export type GiSaddleEvents = typeof __propDef.events;
export type GiSaddleSlots = typeof __propDef.slots;
export default class GiSaddle extends SvelteComponentTyped<GiSaddleProps, GiSaddleEvents, GiSaddleSlots> {
}
export {};
