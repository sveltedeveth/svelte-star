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
export type GiDiplomaProps = typeof __propDef.props;
export type GiDiplomaEvents = typeof __propDef.events;
export type GiDiplomaSlots = typeof __propDef.slots;
export default class GiDiploma extends SvelteComponentTyped<GiDiplomaProps, GiDiplomaEvents, GiDiplomaSlots> {
}
export {};
