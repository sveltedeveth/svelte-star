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
export type GiBulletsProps = typeof __propDef.props;
export type GiBulletsEvents = typeof __propDef.events;
export type GiBulletsSlots = typeof __propDef.slots;
export default class GiBullets extends SvelteComponentTyped<GiBulletsProps, GiBulletsEvents, GiBulletsSlots> {
}
export {};
