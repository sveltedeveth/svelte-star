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
export type DiRasberryPiProps = typeof __propDef.props;
export type DiRasberryPiEvents = typeof __propDef.events;
export type DiRasberryPiSlots = typeof __propDef.slots;
export default class DiRasberryPi extends SvelteComponentTyped<DiRasberryPiProps, DiRasberryPiEvents, DiRasberryPiSlots> {
}
export {};
